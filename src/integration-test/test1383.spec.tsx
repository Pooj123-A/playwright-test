
import { test, expect } from "@playwright/experimental-ct-react";
import App1383 from "../example/App1383.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1383 />);
  await expect(component).toContainText("Learn React");
});
