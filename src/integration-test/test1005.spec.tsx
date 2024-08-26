
import { test, expect } from "@playwright/experimental-ct-react";
import App1005 from "../example/App1005.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1005 />);
  await expect(component).toContainText("Learn React");
});
