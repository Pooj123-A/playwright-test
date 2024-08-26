
import { test, expect } from "@playwright/experimental-ct-react";
import App2772 from "../example/App2772.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2772 />);
  await expect(component).toContainText("Learn React");
});
