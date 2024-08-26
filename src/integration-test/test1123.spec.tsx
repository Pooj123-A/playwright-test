
import { test, expect } from "@playwright/experimental-ct-react";
import App1123 from "../example/App1123.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1123 />);
  await expect(component).toContainText("Learn React");
});
