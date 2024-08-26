
import { test, expect } from "@playwright/experimental-ct-react";
import App1080 from "../example/App1080.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1080 />);
  await expect(component).toContainText("Learn React");
});
