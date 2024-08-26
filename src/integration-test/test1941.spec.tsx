
import { test, expect } from "@playwright/experimental-ct-react";
import App1941 from "../example/App1941.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1941 />);
  await expect(component).toContainText("Learn React");
});
