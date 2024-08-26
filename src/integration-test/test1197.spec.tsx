
import { test, expect } from "@playwright/experimental-ct-react";
import App1197 from "../example/App1197.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1197 />);
  await expect(component).toContainText("Learn React");
});
