
import { test, expect } from "@playwright/experimental-ct-react";
import App1785 from "../example/App1785.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1785 />);
  await expect(component).toContainText("Learn React");
});
