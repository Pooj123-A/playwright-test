
import { test, expect } from "@playwright/experimental-ct-react";
import App1504 from "../example/App1504.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1504 />);
  await expect(component).toContainText("Learn React");
});
