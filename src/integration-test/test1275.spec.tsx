
import { test, expect } from "@playwright/experimental-ct-react";
import App1275 from "../example/App1275.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1275 />);
  await expect(component).toContainText("Learn React");
});
