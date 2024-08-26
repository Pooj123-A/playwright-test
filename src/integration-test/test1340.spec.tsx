
import { test, expect } from "@playwright/experimental-ct-react";
import App1340 from "../example/App1340.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1340 />);
  await expect(component).toContainText("Learn React");
});
