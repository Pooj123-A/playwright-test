
import { test, expect } from "@playwright/experimental-ct-react";
import App1925 from "../example/App1925.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1925 />);
  await expect(component).toContainText("Learn React");
});
