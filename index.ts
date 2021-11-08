import * as k8s from "@pulumi/kubernetes";
import * as kx from "@pulumi/kubernetesx";

const namespace = new k8s.core.v1.Namespace("test");
export const name = namespace.metadata.name;
