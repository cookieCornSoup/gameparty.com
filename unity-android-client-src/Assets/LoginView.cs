using System.Collections;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class LoginView : MonoBehaviour
{

    public TMP_InputField idInputField;
    public TMP_InputField passwordInputField;

    public Button loginBtn;
    public Button signUpBtn;

    public Toggle autoLoginToggle;


    public bool isEmail(string email)
    { 
        Regex regex = new Regex(@"[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?");
        Match match = regex.Match(email);
        if (match.Success)
            return true;
        else
            return false;
    }


    public void OnFocusView()
    {
        idInputField.ActivateInputField();
    }
    // Start is called before the first frame update
    void Start()
    {
        OnFocusView();

        loginBtn.onClick.AddListener(() =>
        {
           /* HttpUtils.Instance.Post(new Models.RequestModel.POST.Login()
            {
                email = idInputField.text, 
                password = passwordInputField.text,
            }, (token) =>
            {
                Debug.Log(token);
            });*/
        });
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
