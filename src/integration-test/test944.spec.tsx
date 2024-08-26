
import { test, expect } from "@playwright/experimental-ct-react";
import App944 from "../example/App944.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App944 />);
  await expect(component).toContainText("Learn React");
});
