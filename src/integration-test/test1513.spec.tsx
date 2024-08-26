
import { test, expect } from "@playwright/experimental-ct-react";
import App1513 from "../example/App1513.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1513 />);
  await expect(component).toContainText("Learn React");
});
