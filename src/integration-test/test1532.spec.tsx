
import { test, expect } from "@playwright/experimental-ct-react";
import App1532 from "../example/App1532.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1532 />);
  await expect(component).toContainText("Learn React");
});
