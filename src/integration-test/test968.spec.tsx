
import { test, expect } from "@playwright/experimental-ct-react";
import App968 from "../example/App968.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App968 />);
  await expect(component).toContainText("Learn React");
});
