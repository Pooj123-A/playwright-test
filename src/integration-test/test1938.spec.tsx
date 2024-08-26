
import { test, expect } from "@playwright/experimental-ct-react";
import App1938 from "../example/App1938.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1938 />);
  await expect(component).toContainText("Learn React");
});
