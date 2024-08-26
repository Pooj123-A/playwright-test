
import { test, expect } from "@playwright/experimental-ct-react";
import App1333 from "../example/App1333.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1333 />);
  await expect(component).toContainText("Learn React");
});
