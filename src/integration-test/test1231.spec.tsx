
import { test, expect } from "@playwright/experimental-ct-react";
import App1231 from "../example/App1231.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1231 />);
  await expect(component).toContainText("Learn React");
});
