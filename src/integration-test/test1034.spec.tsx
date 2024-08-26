
import { test, expect } from "@playwright/experimental-ct-react";
import App1034 from "../example/App1034.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1034 />);
  await expect(component).toContainText("Learn React");
});
