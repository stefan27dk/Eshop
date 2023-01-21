

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();



// Dev - Mode
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}



//app.MapGet("/", () => "Hello 335 World!");

// SPA
app.UseDefaultFiles(); // Means search for the index.html or default files in wwwroot - 
app.UseStaticFiles(); // Static files are files in the wwwroot - Use wwwroot files


// Https
app.UseHsts();
app.UseHttpsRedirection();
app.UseRouting();


// Endpoints
app.MapFallbackToFile("/index.html");  // Route to the index.html if 404 Error and for SPA it always routes to index because SPA is single page APP.  //This is not url routing for the SPA Views - The url routing is done on the cLient side with javascript. 


app.Run();

