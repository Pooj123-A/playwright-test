
import { test, expect } from "@playwright/experimental-ct-react";
import App969 from "../example/App969.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App969 />);
  await expect(component).toContainText("Learn React");
});
