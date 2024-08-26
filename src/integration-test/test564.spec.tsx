
import { test, expect } from "@playwright/experimental-ct-react";
import App564 from "../example/App564.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App564 />);
  await expect(component).toContainText("Learn React");
});
