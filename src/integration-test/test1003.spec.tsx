
import { test, expect } from "@playwright/experimental-ct-react";
import App1003 from "../example/App1003.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1003 />);
  await expect(component).toContainText("Learn React");
});
