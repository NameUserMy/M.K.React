using HW_7_MusicPortal.Services;
using Music_Portal_WebApi.Services;
using MusicPortal.BLL.Infrastructure;



var builder = WebApplication.CreateBuilder(args);



builder.Services.AddMusicPortalContext("Data Source=./Data/MusicPortal.db");
builder.Services.AddUOW();
builder.Services.Admin();
builder.Services.AddScoped<Encryption>();
builder.Services.AddScoped<ChangeFileNameService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.UseCors(builder=>builder.WithOrigins("http://localhost:5173").
AllowAnyHeader().
AllowAnyMethod());

app.Run();
