
import { test, expect } from "@playwright/experimental-ct-react";
import App2072 from "../example/App2072.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2072 />);
  await expect(component).toContainText("Learn React");
});
