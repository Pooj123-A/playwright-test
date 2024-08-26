
import { test, expect } from "@playwright/experimental-ct-react";
import App990 from "../example/App990.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App990 />);
  await expect(component).toContainText("Learn React");
});
