import docker
client = docker.from_env()
container = client.containers.run("hello-world", detach=False)
print(container)

#docker run -it -p 127.0.0.1:8080:8080 -v "${HOME}/.local/share/code-server:/home/krshivendu/.local/share/code-server" -v "$PWD:/home/krshivendu/project" codercom/code-server:v2 
