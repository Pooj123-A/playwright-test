
import { test, expect } from "@playwright/experimental-ct-react";
import App1162 from "../example/App1162.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1162 />);
  await expect(component).toContainText("Learn React");
});
