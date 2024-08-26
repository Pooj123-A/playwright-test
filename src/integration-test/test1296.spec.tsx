
import { test, expect } from "@playwright/experimental-ct-react";
import App1296 from "../example/App1296.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1296 />);
  await expect(component).toContainText("Learn React");
});
