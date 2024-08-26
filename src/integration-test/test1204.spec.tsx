
import { test, expect } from "@playwright/experimental-ct-react";
import App1204 from "../example/App1204.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1204 />);
  await expect(component).toContainText("Learn React");
});
