
import { test, expect } from "@playwright/experimental-ct-react";
import App101 from "../example/App101.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App101 />);
  await expect(component).toContainText("Learn React");
});
