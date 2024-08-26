
import { test, expect } from "@playwright/experimental-ct-react";
import App1319 from "../example/App1319.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1319 />);
  await expect(component).toContainText("Learn React");
});
