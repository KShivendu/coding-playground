https://repl.it/templates - has different templates for really amazing projects


https://docs.repl.it/repls/dot-replit - You can configure repl enviroments for different purposes

You can check announcement sections of their forum and blog both for more useful content


https://cloud.google.com/customers/repl-it/

working with Google Cloud for Startups. Amjad and his team worked with Google Cloud to integrate the legacy open source pieces of the Repl.it 
ecosystem, including its Redis database and containers, into a scalable cloud-based platform.


platform began as a single virtual machine — a Droplet on Digital Ocean

Repl.it uses Ansible to push deployments
creating instance templates in Container Registry in GCP Cloud Memorystore provides a low-latency, in-memory store for the Redis database. Compute Engine scales the instance group automatically.


This is a crucial piece because Repl.it's execution environment must now support about 10,000 concurrent containers. "When we hit a certain CPU threshold, Google Cloud Load Balancing will instantiate new instances and go up and down as needed."

Repl.it uses Google Container Registry and Cloud Storage to more securely and responsively manage Docker images and build and deploy pipelines. A proxy prefix handles the persistent links for containers. Cloud Memorystore provides a scalable, low-latency, in-memory store for the extremely distributed Repl.it Redis database. The REPL functionality is coded in the browsers used by developers and classroom coders. BigQuery interacts with Segment.com to capture metrics showing how Repl.it communities use site components.

https://github.com/amasad


https://replit.canny.io/


https://dev.to/12944qwerty/repl-it-pros-cons-fj7 - Useful info for me


https://repl.it/@amasad


Checkout  replConcepts-java-swing.md

Similar software for more inspiration:

https://www.katacoda.com/


https://labs.play-with-docker.com/ - whose code is at  https://github.com/play-with-docker/play-with-docker


https://repl.it/@KShivendu/crosis-example - find out how to use this, guide (http://protodoc.turbio.repl.co/)

checkout this HN thread https://news.ycombinator.com/item?id=16578597



https://hub.docker.com/r/replco/polygott/dockerfile
# This dockerfile describes how the polygott container is build up


I did realise that the number of possible commands in my local polygott docker container is different from the repl.it server's container.
I have less number of commands available

Also the shasum of polygot-survey was different

Another thing is that repl.it containers don't give you sudo access.

Also, If you use `cd ..` from repl.it containers from the username you are given you will be sent back to /home/ directory.
But you should be in /home/runner directory instead


https://repl.it/data/pythonlibraries/search?q=some is being used to search for different possible libraries or packages
