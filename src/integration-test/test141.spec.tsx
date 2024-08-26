
import { test, expect } from "@playwright/experimental-ct-react";
import App141 from "../example/App141.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App141 />);
  await expect(component).toContainText("Learn React");
});
