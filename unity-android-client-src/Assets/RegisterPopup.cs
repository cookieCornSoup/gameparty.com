using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;

public class RegisterPopup : MonoBehaviour
{
    public TMP_InputField emailInputField;
    public TMP_InputField passwordInputField;
    public TMP_InputField passwordValidInputField;

    public Button registerBtn;

    public void Awake()
    {
        AddEventListener();
    }

    public void AddEventListener()
    {
        registerBtn.onClick.AddListener(() => { 
            HttpUtils.Instance.Post(new Models.RequestModel.POST.SignUp() {
                email = emailInputField.text,
                password = passwordInputField.text
            }, (response)=> {   
                Debug.Log(response); 
            });
        });
    }
}
