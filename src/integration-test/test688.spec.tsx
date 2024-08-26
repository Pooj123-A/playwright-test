
import { test, expect } from "@playwright/experimental-ct-react";
import App688 from "../example/App688.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App688 />);
  await expect(component).toContainText("Learn React");
});
