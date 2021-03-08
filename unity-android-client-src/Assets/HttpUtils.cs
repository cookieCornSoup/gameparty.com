using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Threading.Tasks;
using UnityEngine.Networking;
public class HttpUtils : MonoBehaviour
{
    private static HttpUtils _instance;
    public static HttpUtils Instance
    {
        get
        {
            if (_instance == null)
            {
                GameObject obj = new GameObject();
                _instance = obj.AddComponent(typeof(HttpUtils)) as HttpUtils;
            }
            return _instance;
        }
    }


    void Awake()
    {
        string json = "{\"email\":\"shlifedev@gmail.com\",\"password\":\"tjdgo123\"}";
        Debug.Log(json); 
        StartCoroutine(Post("http://localhost:3001/api/auth/login", json, (string json)=>{
            Debug.Log(json);
        }));
    }

    IEnumerator Post(string url, string json, System.Action<string> callback)
    {
        var request = new UnityWebRequest(url, "POST");
        byte[] bodyRaw = System.Text.Encoding.UTF8.GetBytes(json); 
        request.uploadHandler = (UploadHandler)new UploadHandlerRaw(bodyRaw);
        request.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer();
        request.SetRequestHeader("Content-Type", "application/json");
        request.timeout = 60;
        yield return request.SendWebRequest();
        if (request.error == null)
        { 
            callback?.Invoke(request.downloadHandler.text); 
        }
        else
        { 
            Debug.LogError(request.error);
        }
    }

}
   
 