
import { test, expect } from "@playwright/experimental-ct-react";
import App1358 from "../example/App1358.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1358 />);
  await expect(component).toContainText("Learn React");
});
