
import { test, expect } from "@playwright/experimental-ct-react";
import App87 from "../example/App87.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App87 />);
  await expect(component).toContainText("Learn React");
});
