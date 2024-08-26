
import { test, expect } from "@playwright/experimental-ct-react";
import App1493 from "../example/App1493.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1493 />);
  await expect(component).toContainText("Learn React");
});
