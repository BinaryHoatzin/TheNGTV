using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Diagnostics.Eventing.Reader;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;


namespace ngTV.Pages.SelectionPage
{
    public class SelectionPageModel : PageModel
    {



        public string SelectionMenu = @"<div id=""MenuBox"" class=""col-6"">
            <div id=""TheMenu"">
                <div class=""MenuItem d-flex align-items-center""> This is a menu item </div>
                <div class=""MenuItem""> This is a menu item </div>
                <div class=""MenuItem""> This is a menu item </div>
                <div class=""MenuItem""> This is a menu item </div>
                <div class=""MenuItem""> This is a menu item </div>
                <div class=""MenuItem""> This is a menu item </div>
                <div class=""MenuItem""> This is a menu item </div>
                <div class=""MenuItem""> This is a menu item </div>
            </div>
        </div>
        <div id=""DescriptionBox"" class=""col-6 d-flex justify-content-center align-items-center"">
            <div id=""Description"" class=""d-flex justify-content-start align-items-start"">
                <p>This will be a description</p>
            </div>
        </div>";




        public void OnGet()
        {


        }
    }
}
