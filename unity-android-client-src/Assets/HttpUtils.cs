using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Threading.Tasks;
using UnityEngine.Networking;
using System;
using System.Text;

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



    public string JWTDecoder(string jwtToken)
    {
        var jwtSplit = jwtToken.Split('.');
        var decodedBase64 = Convert.FromBase64String(jwtSplit[1]);
        var decodedString = Encoding.UTF8.GetString(decodedBase64);

        return decodedString;
    }
    void Awake()
    {
        string json = "{\"email\":\"shlifedev@gmail.com\",\"password\":\"tjdgo123\"}"; 
        Post("http://localhost:3001/api/auth/login", json, (string response)=>{
            Debug.Log(JWTDecoder(response));
            Debug.Log(response);
        });
     


    
    }

    public void Post(string url, string json, System.Action<string> callback)
    {
        StartCoroutine(CoPost(url,json,callback));
    }
    IEnumerator CoPost(string url, string json, System.Action<string> callback)
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
   
 