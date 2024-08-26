
import { test, expect } from "@playwright/experimental-ct-react";
import App1882 from "../example/App1882.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1882 />);
  await expect(component).toContainText("Learn React");
});
