
import { test, expect } from "@playwright/experimental-ct-react";
import App1903 from "../example/App1903.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1903 />);
  await expect(component).toContainText("Learn React");
});
