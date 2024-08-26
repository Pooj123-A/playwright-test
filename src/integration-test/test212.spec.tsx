
import { test, expect } from "@playwright/experimental-ct-react";
import App212 from "../example/App212.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App212 />);
  await expect(component).toContainText("Learn React");
});
