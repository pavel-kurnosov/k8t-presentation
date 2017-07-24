# Requirements
 You should have already cluster in Google cloud setted up.
 
# Steps
1. docker build -f Dockerfile -t gcr.io/YOUR_PROJECT/k8t-sample:1.0 .
2. gcloud docker -- push gcr.io/YOUR_PROJECT/k8t-sample
3. kubectl apply -f deployment.yaml

// create new awesome version of the app 
4. docker build -f Dockerfile -t gcr.io/YOUR_PROJECT/k8t-sample:1.1 .
5. gcloud docker -- push gcr.io/YOUR_PROJECT/k8t-sample
6. kubectl set image deployment k8t-sample-deployment k8t-sample=gcr.io/YOUR_PROJECT/k8t-sample:1.1

7. kubectl rollout undo deployment k8t-sample-deployment
8. kubectl rollout history deployment k8t-sample-deployment
