
import { test, expect } from "@playwright/experimental-ct-react";
import App940 from "../example/App940.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App940 />);
  await expect(component).toContainText("Learn React");
});
