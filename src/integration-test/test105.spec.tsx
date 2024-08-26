
import { test, expect } from "@playwright/experimental-ct-react";
import App105 from "../example/App105.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App105 />);
  await expect(component).toContainText("Learn React");
});
