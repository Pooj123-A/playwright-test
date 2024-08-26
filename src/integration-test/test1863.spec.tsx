
import { test, expect } from "@playwright/experimental-ct-react";
import App1863 from "../example/App1863.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1863 />);
  await expect(component).toContainText("Learn React");
});
