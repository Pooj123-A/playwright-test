
import { test, expect } from "@playwright/experimental-ct-react";
import App1376 from "../example/App1376.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1376 />);
  await expect(component).toContainText("Learn React");
});
