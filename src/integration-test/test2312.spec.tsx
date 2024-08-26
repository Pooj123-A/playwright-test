
import { test, expect } from "@playwright/experimental-ct-react";
import App2312 from "../example/App2312.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2312 />);
  await expect(component).toContainText("Learn React");
});
