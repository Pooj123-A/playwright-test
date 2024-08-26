
import { test, expect } from "@playwright/experimental-ct-react";
import App150 from "../example/App150.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App150 />);
  await expect(component).toContainText("Learn React");
});
