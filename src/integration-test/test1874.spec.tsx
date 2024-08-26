
import { test, expect } from "@playwright/experimental-ct-react";
import App1874 from "../example/App1874.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1874 />);
  await expect(component).toContainText("Learn React");
});
